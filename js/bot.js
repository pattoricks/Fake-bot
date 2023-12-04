const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        "Halo, im bot, siapa nama kamu?",
        `Halo ${data?.nama}, apa hobi kamu??`,
        `Ow ${data?.hobi}, sekarang berapa usia kamu?`,
        `Oh ${data?.usia}, Apakah kamu sudah punya pacar?`,
        `Ohh ${data?.pacar}, Yah yauda deh huhu`
    ]
}

pertanyaan.innerHTML = botSay() [0]

function botStart() {
    init++
    if (init === 1) {
    botDelay({ nama :jawaban.value })
    } else if (init === 2) {
        botDelay({ hobi :jawaban.value })
    } else if (init === 3) {
        botDelay({ usia :jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar :jawaban.value })
    } else if (init === 5) {
        finishing()
    }
    else {
        botEnd()
    }        
}

function botDelay(jawabanUser) {
    setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [500])
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML =  `Thanks ya udah nyoba`
    jawaban.value = "Thanks juga"
}

function botEnd() {
    window.location.reload()
}