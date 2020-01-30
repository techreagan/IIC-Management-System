import Api from '@/services/Api'

export default {
  getAll() {
    return Api().get('attendees')
  },
  deleteById(id) {
    return Api().delete(`attendees/${id}`)
  }
}
