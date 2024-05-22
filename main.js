const container = document.querySelector('.datos')

const form = document.querySelector('form')

let clubes = localStorage.getItem('clubes')

clubes = JSON.parse(clubes)

function agregarDatosHTML(arr, contenedor) {
    let datos = ''

    arr.forEach(club => {
        datos += `
            <tr id="${club.id}">
                <td>${club.name}</td>
                <td>${club.city}</td>
                <td>${club.championships}</td>
                <td><button id="${club.id}-delete" data-id="${club.id}" class="delete">Eliminar</button></td>
            </tr>                            
    `
    });
    contenedor.innerHTML = datos
}

function agregarEventDelete() {
    const btns = document.querySelectorAll('.delete')

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const id = btn.getAttribute('data-id')
            const tr = document.querySelector(`#${id}`)
            clubes = clubes.filter(club => club.id !== id)
            localStorage.setItem('clubes', JSON.stringify(clubes))
            tr.remove()
        })
    })
}



form.addEventListener('submit', function (event) {
    event.preventDefault()
    const datos = Object.fromEntries(new FormData(event.target))
    if (Object.values(datos).every(value => value)) {
        datos.id = `club-${clubes.length}`
        clubes.push(datos)
        localStorage.setItem('clubes', JSON.stringify(clubes))
        agregarDatosHTML(clubes, container)
        this.reset()
    }

})

function main() {
    agregarDatosHTML(clubes, container)
    agregarEventDelete()
}

main()

/**
 * 
 Datos para setear localStorage
const nba = [
    {
      "id": "club-0",
      "name": "Los Angeles Lakers",
      "city": "Los Angeles",
      "championships": 17
    },
    {
      "id": "club-1",
      "name": "Golden State Warriors",
      "city": "San Francisco",
      "championships": 7
    },
    {
      "id": "club-2",
      "name": "Chicago Bulls",
      "city": "Chicago",
      "championships": 6
    },
    {
      "id": "club-3",
      "name": "Boston Celtics",
      "city": "Boston",
      "championships": 17
    },
    {
      "id": "club-4",
      "name": "Miami Heat",
      "city": "Miami",
      "championships": 3
    },
    {
      "id": "club-5",
      "name": "San Antonio Spurs",
      "city": "San Antonio",
      "championships": 5
    },
    {
      "id": "club-6",
      "name": "New York Knicks",
      "city": "New York",
      "championships": 2
    },
    {
      "id": "club-7",
      "name": "Toronto Raptors",
      "city": "Toronto",
      "championships": 1
    },
    {
      "id": "club-8",
      "name": "Dallas Mavericks",
      "city": "Dallas",
      "championships": 1
    }
  ]

  localStorage.setItem('clubes', nba)
  */
