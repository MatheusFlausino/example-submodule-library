import Swal from 'sweetalert2'

// Class initilize the Swal with title, describe and icone
export default class AlertClass {
  constructor (title, describe = '', icon = 'info') {
    this.title = title
    this.describe = describe
    this.icon = icon
    this.confirmButtonText = `
    <i class="fa fa-thumbs-up"></i> Confirm
  `
  this.cancelButtonText = `
    <i class="fa fa-thumbs-down"></i> Don't
  `
  }

  setConfirmBtn (text) {
    this.confirmButtonText = text
  }

  setCancelBtn (text) {
    this.cancelButtonText = text
  }

  // Function to show the alert
  show (options = {}) {
    console.info('Alert', this.title, this.describe, this.icon)
    Swal.fire({
      showCancelButton: true,
      ...options,
      title: this.title,
      text: this.describe,
      icon: this.icon,
      confirmButtonText: this.confirmButtonText,
      cancelButtonText: this.cancelButtonText,
    })
  }
}
