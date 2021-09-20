input.onButtonPressed(Button.A, function () {
    binair = "" + binair + "1"
})
function converteer (binairGetal: string) {
    totaal = 0
    for (let index = 0; index <= binairGetal.length - 1; index++) {
        totaal = totaal + 2 ** index * parseFloat(binairGetal.charAt(index))
    }
    return totaal
}
input.onButtonPressed(Button.AB, function () {
    omgekeerdeTekst = keerOm(binair)
    basic.showNumber(converteer(omgekeerdeTekst))
})
function keerOm (input2: string) {
    omgekeerd = ""
    for (let waarde of input2) {
        omgekeerd = "" + waarde + omgekeerd
    }
    return omgekeerd
}
input.onButtonPressed(Button.B, function () {
    binair = "" + binair + "0"
})
function som (getal1: number, getal2: number) {
    uitkomst = getal2 + getal1
    return uitkomst
}
let uitkomst = 0
let omgekeerd = ""
let omgekeerdeTekst = ""
let totaal = 0
let binair = ""
binair = ""
