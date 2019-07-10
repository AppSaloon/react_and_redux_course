import React, { Component } from 'react'
import { connect } from 'react-redux'
import handleChange from '../../utils/handleChange'
import { addCountryCode } from '../../redux/reusedObjectReferenceState/actions'

class ReusedObjectReference extends Component {

  constructor(props) {
    super(props)
    this.state = {
      code: '',
      name: '',
    }
    this.handleChange = handleChange.bind(this)
  }

  handleClick = () => {
    const {
      code,
      name
    } = this.state
    this.props.addCountryCode(code, name)
  }

  render () {
    const {
      countryCodes,
    } = this.props
    return (
      <div>

        <div>
          Country code: <input type="text" onChange={this.handleChange} name='code' value={this.state.code}/>
        </div>
        <div>
          Country name: <input type="text" onChange={this.handleChange} name='name' value={this.state.name}/>
        </div>

        <button onClick={this.handleClick}>Add country code</button>

        <table>
          <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {
            Object.keys(countryCodes).map((code) => {
              const name = countryCodes[code]
              return (
                <tr key={code}>
                  <td>{code}</td>
                  <td>{name}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = ({reusedObjectReferenceState}) => ({
  countryCodes: reusedObjectReferenceState.countryCodes,
})

const mapDispatchToProps = dispatch => ({
  addCountryCode: (code, name) => dispatch(addCountryCode(code, name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReusedObjectReference)