import React from 'react'

import { withClient } from 'cozy-client'
import Intents from 'cozy-interapp'
import { Button } from 'cozy-ui/react/Button'
import Input from 'cozy-ui/react/Input'
import Textarea from 'cozy-ui/react/Textarea'
import Label from 'cozy-ui/react/Label'

class Redirect extends React.Component {
  constructor() {
    super()
    this.state = {
      doctype: localStorage.getItem('customDoctype'),
      options: this.parseAndHandleError(localStorage.getItem('customOptions')),
      parsingError: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    const value = ev.target.value
    switch (ev.target.name) {
      case 'doctype':
        this.setState({ doctype: value })
        localStorage.setItem('customDoctype', value)
        break
      case 'options': {
        const parsed = this.parseAndHandleError(value)
        this.setState({ options: parsed })
        localStorage.setItem('customOptions', JSON.stringify(parsed))
        break
      }
      default:
        return
    }
  }

  handleSubmit() {
    this.redirect()
  }

  parseAndHandleError(toParse) {
    if (!toParse) return null
    try {
      const parsed = JSON.parse(toParse)
      this.setState({
        parsingError: false
      })
      return parsed
    } catch (e) {
      this.setState({
        parsingError: true
      })
      return toParse
    }
  }

  redirect() {
    const { doctype, options, parsingError } = this.state
    const { client } = this.props
    const intents = new Intents({ client })
    intents.redirect(doctype, parsingError ? 'JSON PARSING ERROR' : options)
  }

  render() {
    const { doctype, options, parsingError } = this.state
    return (
      <div className="custom-intent">
        <h1>Redirect maker</h1>
        <Label htmlFor="customDoctype">
          Doctype:
          <Input
            id="customDoctype"
            type="text"
            name="doctype"
            onChange={this.handleChange}
            value={doctype}
            size="tiny"
          />
        </Label>
        <Label htmlFor="customOptions">
          Options:
          <Textarea
            id="customOptions"
            type="text"
            name="options"
            onChange={this.handleChange}
            value={
              parsingError
                ? options
                : options && JSON.stringify(options, null, 2)
            }
            size="medium"
            error={parsingError}
          />
        </Label>
        <br />
        <Button disabled={!doctype} onClick={this.handleSubmit}>
          Redirect !
        </Button>
      </div>
    )
  }
}

export default withClient(Redirect)
