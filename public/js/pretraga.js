

async function pretraziKnjigeInput() {

    input = document.querySelector('#inp1').value

    window.location = '/korisnik/pretrazi?par=' + input

}

function procitaoZeliProc(btn) {

    event.stopPropagation()

    const id = btn.parentElement.classList[2]

    var zeli = (btn.innerText == ' Read it') ? false : true

    fetch('http://localhost:5000/korisnik/procitao-zeli-procitati?id=' + id + '&zeli=' + zeli)
        .then(res => {
            return res.json()
        })
        .then(rez => {
            if (rez) {
                if (zeli) {

                    btn.innerHTML = ''
                    btn.innerHTML = ` <i class="fas fa-check text-primary"></i>
                                Want to read`

                    btn.nextElementSibling.innerHTML = `<i class="fas fa-book  butn"> Read it</i>`
                }
                else {

                    btn.innerHTML = ''
                    btn.innerHTML = ` <i class="fas fa-check text-primary"></i>
                                     Read it`

                    btn.previousElementSibling.innerHTML =`<i
                                      class="fas fa-book-reader  butn"> Want to read</i>`

                }
            }

        })
        .catch(err => {
            console.log(err)
        })
}

function obrisiKnjigu(knjiga){

    event.stopPropagation()

    const id_knjige=knjiga.parentElement.classList[2]

    let answer=confirm('Do you want to delete book?')

    if(answer){

        fetch('http://localhost:5000/korisnik/obrisi-knjigu/'+id_knjige)
        .then(res=>{
            return res.json()
        })
        .then(rez=>{
            if(rez){

                const kontejner=document.querySelector('#knjige')

                kontejner.removeChild(document.getElementById(id_knjige))

            }

        })
        .catch(err=>{
            console.log(err)
        })
       
    }

}


