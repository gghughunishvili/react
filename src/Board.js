import React, { Component} from 'react'
import Note from './Note'
import axios from 'axios'
class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 1,
          note: 'Call Jeffrey'
        }, 
        {
          id: 2,
          note: 'Study some VueJs'
        }, 
        {
          id: 3,
          note: 'Do some Karate'
        }, 
      ]
    }
    this.update = this.update.bind(this)
    this.eachNote = this.eachNote.bind(this)
    this.add = this.add.bind(this)
    this.nextId = this.nextId.bind(this)
  }
  componentWillMount() {
    if (this.props.count) {
      var url = `http://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
      axios.get(url)
        .then(results => results.data)
        .then(array => array[0])
        .then(text => text.split('. '))
        .then(array => array.forEach(sentence => this.add(sentence)))
        .catch(function(err) {
          console.log("Didn't connect to the API", err)
        })
    }
  }
  nextId() {
    this.uniqueId = this.uniqueId || 4
    return this.uniqueId++
  }
  add(text) {
    var notes = [
      ...this.state.notes, 
      {
        id: this.nextId(),
        note: text
      }
    ]
    this.setState({notes})
  }
  update(newText, id) {
    var notes = this.state.notes.map(note => (note.id !== id) ? note : {
      ...note,
      note: newText
    })
    this.setState({notes})
  }
  remove(id) {
    var notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  }
  eachNote(note) {
    return ( 
      <Note key = { note.id } 
            id = { note.id }
            onChange = { this.update }
            onRemove = { () => this.remove(note.id) }> 
              {note.note} 
      </Note>
    )
  }
  render() {
    return ( 
      <div className = "board"> 
          { this.state.notes.map(this.eachNote) } 
          < button onClick = { () => this.add('New Note') } >+< /button> 
      </div> 
    )
  }
}

Board.propTypes = {
  count: function(props, propName) {
    if (typeof props[propName] !== "number") {
      return new Error("The count must be a number!")
    }
    if (props[propName] > 100) {
      return new Error("The number of notes: " + props[propName] + " is ridiculous!")
    }
  }
}
export default Board