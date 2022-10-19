export const PrintResult = (txt, path, result) => {
    const row       = document.createElement('div')
    row.className   = 'row'
    const col       = document.createElement('div')
    col.className   = 'col-md-12'
    const card      = document.createElement('div')
    card.className  = 'card'
    const body      = document.createElement('div')
    body.className  = 'card-body'

    

    card.appendChild(body)
    col.appendChild(card)
    row.appendChild(col)
    return row
}