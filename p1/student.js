const fullName = () => {
    const firstName = "Md Abdul";
    const lastName = " Halim";

    const d = firstName + lastName;
    return d;
}

const doMath = () =>{
    const ten = 10;
    const tent = 10;

    const twoFactor = ten * tent;
    return twoFactor;
}

const footBallMatch = () =>{
    const needPlayer = "If you want to design field squad need 11 Players";

    return needPlayer;
}

// exports.fullName= fullName;
// exports.doMath = doMath;
// exports.footBallMatch = footBallMatch;

module.exports = {
    fullName,
    doMath,
    footBallMatch
}

