/* 
 * This software was developed at the National Institute of Standards and
 * Technology by employees of the Federal Government in the course of
 * their official duties. Pursuant to title 17 Section 105 of the United
 * States Code this software is not subject to copyright protection and is
 * in the public domain. This software is an experimental system. NIST assumes
 * no responsibility whatsoever for its use by other parties, and makes no
 * guarantees, expressed or implied, about its quality, reliability, or
 * any other characteristic. We would appreciate acknowledgement if the
 * software is used.
 */

(function($$) {

    $$.ElementColor = $$.ElementColor || {};

    $$.ElementColor.getElementColor = function(element) {
        return elementsColors[element] || "#eb0026";
    };

    // Colors assigned to elements copied from Jmol color scheme:
    // http://jmol.sourceforge.net/jscolors/
    /* jshint latedef: false */
    var elementsColors = {
        "H": "#ffffff",
        "D": "#ffffc0",
        "2H": "#ffffc0",
        "T": "#ffffa0",
        "3H": "#ffffa0",
        "He": "#d9ffff",
        "Li": "#cc80ff",
        "Be": "#c2ff00",
        "B": "#ffb5b5",
        "C": "#909090",
        "13C": "#505050",
        "14C": "#404040",
        "N": "#3050f8",
        "15N": "#105050",
        "O": "#ff0d0d",
        "F": "#90e050",
        "Ne": "#b3e3f5",
        "Na": "#ab5cf2",
        "Mg": "#8aff00",
        "Al": "#bfa6a6",
        "Si": "#f0c8a0",
        "P": "#ff8000",
        "S": "#ffff30",
        "Cl": "#1ff01f",
        "Ar": "#80d1e3",
        "K": "#8f40d4",
        "Ca": "#3dff00",
        "Sc": "#e6e6e6",
        "Ti": "#bfc2c7",
        "V": "#a6a6ab",
        "Cr": "#8a99c7",
        "Mn": "#9c7ac7",
        "Fe": "#e06633",
        "Co": "#f090a0",
        "Ni": "#50d050",
        "Cu": "#c88033",
        "Zn": "#7d80b0",
        "Ga": "#c28f8f",
        "Ge": "#668f8f",
        "As": "#bd80e3",
        "Se": "#ffa100",
        "Br": "#a62929",
        "Kr": "#5cb8d1",
        "Rb": "#702eb0",
        "Sr": "#00ff00",
        "Y": "#94ffff",
        "Zr": "#94e0e0",
        "Nb": "#73c2c9",
        "Mo": "#54b5b5",
        "Tc": "#3b9e9e",
        "Ru": "#248f8f",
        "Rh": "#0a7d8c",
        "Pd": "#006985",
        "Ag": "#c0c0c0",
        "Cd": "#ffd98f",
        "In": "#a67573",
        "Sn": "#668080",
        "Sb": "#9e63b5",
        "Te": "#d47a00",
        "I": "#940094",
        "Xe": "#429eb0",
        "Cs": "#57178f",
        "Ba": "#00c900",
        "La": "#70d4ff",
        "Ce": "#ffffc7",
        "Pr": "#d9ffc7",
        "Nd": "#c7ffc7",
        "Pm": "#a3ffc7",
        "Sm": "#8fffc7",
        "Eu": "#61ffc7",
        "Gd": "#45ffc7",
        "Tb": "#30ffc7",
        "Dy": "#1fffc7",
        "Ho": "#00ff9c",
        "Er": "#00e675",
        "Tm": "#00d452",
        "Yb": "#00bf38",
        "Lu": "#00ab24",
        "Hf": "#4dc2ff",
        "Ta": "#4da6ff",
        "W": "#2194d6",
        "Re": "#267dab",
        "Os": "#266696",
        "Ir": "#175487",
        "Pt": "#d0d0e0",
        "Au": "#ffd123",
        "Hg": "#b8b8d0",
        "Tl": "#a6544d",
        "Pb": "#575961",
        "Bi": "#9e4fb5",
        "Po": "#ab5c00",
        "At": "#754f45",
        "Rn": "#428296",
        "Fr": "#420066",
        "Ra": "#007d00",
        "Ac": "#70abfa",
        "Th": "#00baff",
        "Pa": "#00a1ff",
        "U": "#008fff",
        "Np": "#0080ff",
        "Pu": "#006bff",
        "Am": "#545cf2",
        "Cm": "#785ce3",
        "Bk": "#8a4fe3",
        "Cf": "#a136d4",
        "Es": "#b31fd4",
        "Fm": "#b31fba",
        "Md": "#b30da6",
        "No": "#bd0d87",
        "Lr": "#c70066",
        "Rf": "#cc0059",
        "Db": "#d1004f",
        "Sg": "#d90045",
        "Bh": "#e00038",
        "Hs": "#e6002e",
        "Mt": "#eb0026"
    };

}(WDZT));
