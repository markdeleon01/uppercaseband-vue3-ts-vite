export const dateFormatMixin = {
  methods: {
    formatDate(value: string) {
      const date = new Date(value)
      return date.toLocaleString(['en-US'], {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }) as string
    }
  }
}
