import Swal from 'sweetalert2'

// Class initilize the Swal with title, describe and icone
export default class AlertClass {
  constructor (title, describe = '', icon = 'info') {
    this.title = title
    this.describe = describe
    this.icon = icon
  }

  // Function to show the alert
  show () {
    console.info('Alert', this.title, this.describe, this.icon)
    Swal.fire({
      title: this.title,
      text: this.describe,
      icon: this.icon
    })
  }
}
