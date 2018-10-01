export function showNotiofication(param) {
    return {
        type: 'SHOW_NOTIFICATION',
        param,
    }
}

export function hideNotiofication(param) {
    return {
      type: 'HIDE_NOTIFICATION',
      param,
    }
}

