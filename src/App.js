import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react'

import connectToDatoCms from './connectToDatoCms'

class SampleEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: props.fieldValue
    }
    this.handleOnBlur = this.handleOnBlur.bind(this)
  }

  handleOnBlur () {
    const { plugin } = this.props
    const { text } = this.state
    plugin.setFieldValue(plugin.fieldPath, text)
  }

  render () {
    const { text } = this.state
    return (
      <CKEditor
        data={text}
        onChange={evt => {
          const data = evt.editor.getData()
          this.setState({ text: data })
        }}
        onBlur={this.handleOnBlur}
      />
    )
  }
}

const mapPluginToProps = plugin => ({
  fieldValue: plugin.getFieldValue(plugin.fieldPath)
})

export default connectToDatoCms(mapPluginToProps)(SampleEditor)
