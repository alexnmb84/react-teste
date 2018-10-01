export function updateCharacter(character) {
    return {
      type: 'UPDATE_CHARACTER',
      character,
    }
}

export function showNotiofication(param) {
    return {
        type: 'SHOW_NOTIFICATION',
        param,
    }
}

