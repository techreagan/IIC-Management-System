import Api from '@/services/Api'

export default {
  getAll(query) {
    return Api().get(`talks?${query}`)
  },
  deleteById(id) {
    return Api().delete(`talks/${id}`)
  },
  create(payload) {
    return Api().post('talks', payload)
  }
}
