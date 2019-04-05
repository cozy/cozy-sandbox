import React from 'react'

import AddButton from './AddButton'
import Textarea from 'cozy-ui/react/Textarea'
import Label from 'cozy-ui/react/Label'
import SelectBox from 'cozy-ui/react/SelectBox'
import getSortedPermissions from 'lib/getSortedPermissions'

class Add extends React.Component {
  constructor() {
    super()
    this.permOptions = getSortedPermissions().POST.map(doctype => ({
      value: doctype,
      label: doctype
    }))
    this.state = {
      doctype:
        localStorage.getItem('document_AddDoctype') || this.permOptions.lentgh
          ? this.permOptions[0].value
          : null,
      attributes: this.parseAndHandleError(
        localStorage.getItem('document_AddAttributes') || ''
      ),
      parsingError: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange(ev) {
    const value = ev.target.value
    switch (ev.target.name) {
      case 'attributes': {
        const parsed = this.parseAndHandleError(value)
        this.setState({ attributes: parsed })
        localStorage.setItem('document_AddAttributes', JSON.stringify(parsed))
        break
      }
      default:
        return
    }
  }

  handleSelect(selected) {
    this.setState({ doctype: selected.value })
    localStorage.setItem('document_AddDoctype', selected.value)
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
    const { doctype, attributes, parsingError } = this.state
    return (
      <div className="add_document">
        <h1>Add document</h1>
        <Label htmlFor="addDoctype">Doctype:</Label>
        <SelectBox
          id="addDoctype"
          name="doctype"
          onChange={this.handleSelect}
          options={this.permOptions}
          value={{
            value: doctype,
            label: doctype
          }}
          size="tiny"
        />
        <Label htmlFor="addAttributes">Attributes:</Label>
        <Textarea
          id="addAttributes"
          className="custom-textarea-big"
          type="text"
          name="attributes"
          onChange={this.handleChange}
          value={
            parsingError
              ? attributes
              : attributes && JSON.stringify(attributes, null, 2)
          }
          size="large"
          error={parsingError}
        />
        <br />
        <AddButton
          doctype={doctype}
          attributes={parsingError ? 'JSON PARSING ERROR' : attributes}
          onComplete={res => alert('Completed ! ' + JSON.stringify(res))}
          label="Add my document"
        />
      </div>
    )
  }
}

export default Add
