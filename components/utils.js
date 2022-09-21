import { isAfter, parseISO } from 'date-fns'
import pick from 'lodash.pick'
import { fields } from '../config/flow'

export function hasNewMessages(lastOpen, messages = []) {
  return messages.length > 0
    ? lastOpen
      ? messages.reduce((acc, message) => {
          return isAfter(parseISO(message.time), parseISO(lastOpen))
            ? acc + 1
            : acc
        }, 0)
      : messages.length
    : 0
}

export function fieldsToShow(item) {
  const filteredItem = pick(item, ['id', 'name', 'tags'])

  return Object.keys(filteredItem).map((field) => [
    fields.find((f) => f.key === field)?.label || field,
    filteredItem[field],
  ])
}
