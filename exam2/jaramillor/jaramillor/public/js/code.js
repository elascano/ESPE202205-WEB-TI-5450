const modalCostumer = new bootstrap.Modal(document.getElementById('modalCostumer'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    name_editar.value = fila.children[1].innerHTML
    age_editar.value = fila.children[2].innerHTML
    moneySpent_editar.value = fila.children[3].innerHTML
    modalCostumer.show()
})