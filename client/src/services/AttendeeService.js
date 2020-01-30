import Api from '@/services/Api'

export default {
  getAll(query) {
    return Api().get(`attendees?${query}`)
  },
  deleteById(id) {
    return Api().delete(`attendees/${id}`)
  },
  create(payload) {
    return Api().post('attendees', payload)
  }
}
