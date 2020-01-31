import Api from '@/services/Api'

export default {
  getAll(query) {
    return Api().get(`talks?${query}`)
  },
  getById(id) {
    return Api().get(`talks/${id}`)
  },
  getAttendees(query) {
    return Api().get(`talks/attendees?${query}`)
  },
  addAttendee(talkId, attendeeId) {
    return Api().post(`talks/${talkId}/attendees`, { attendeeId })
  },
  deleteById(id) {
    return Api().delete(`talks/${id}`)
  },
  create(payload) {
    return Api().post('talks', payload)
  }
}
