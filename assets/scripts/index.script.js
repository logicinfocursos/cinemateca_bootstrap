function clicked(option) {

    if (option == 'grid') {
        document.getElementById('grid').style.display = 'block'
        document.getElementById('list').style.display = 'none'

    } else {
        document.getElementById('grid').style.display = 'none'
        document.getElementById('list').style.display = 'block'

    }

    document.getElementById('btn-grid').classList.toggle("active")
    document.getElementById('btn-list').classList.toggle("active")
}
