import React from 'react'

import VerboseIntentOpener from './VerboseIntentOpener'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Input from 'cozy-ui/transpiled/react/Input'
import Textarea from 'cozy-ui/transpiled/react/Textarea'
import Label from 'cozy-ui/transpiled/react/Label'

class FileIntent extends React.Component {
  constructor() {
    super()
    this.state = {
      action: localStorage.getItem('customAction'),
      doctype: localStorage.getItem('customDoctype'),
      options: this.parseAndHandleError(localStorage.getItem('customOptions')),
      parsingError: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    const value = ev.target.value
    switch (ev.target.name) {
      case 'action':
        this.setState({ action: value })
        localStorage.setItem('customAction', value)
        break
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

  render() {
    const { action, doctype, options, parsingError } = this.state
    return (
      <div className="custom-intent">
        <h1>Interapp maker</h1>
        <Label htmlFor="customAction">
          Action:
          <Input
            id="customAction"
            type="text"
            name="action"
            onChange={this.handleChange}
            value={action}
            size="tiny"
          />
        </Label>
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
        <VerboseIntentOpener
          action={action}
          doctype={doctype}
          options={parsingError ? 'JSON PARSING ERROR' : options}
          onComplete={res =>
            alert('intent has completed ! ' + JSON.stringify(res))
          }
          onDismiss={() => alert('intent has been dismissed !')}
        >
          <Button disabled={!action || !doctype} label={'Shake the magic box & see'} />
        </VerboseIntentOpener>
      </div>
    )
  }
}

export default FileIntent
