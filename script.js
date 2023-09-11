window.onload = function () {
    var button1 = document.getElementById('harm1');
    var button2 = document.getElementById('harm2');
    var button3 = document.getElementById('harm3');
    var button4 = document.getElementById('use1'); // Fixed ID 'use1'
    var button5 = document.getElementById('use2'); // Fixed ID 'use2'
    var button6 = document.getElementById('use3'); // Fixed ID 'use3'
    var button1on = null;
    var button2on = null;
    var button3on = null;
    var button4on = null;
    var button5on = null;
    var button6on = null;

    button1.onclick = function () {
        var button1Div = document.querySelector(".Ecoli");

        if (button1on === null) {
            button1on = document.createElement("p");
            button1on.textContent = "Escherichia coli, or E. coli, can be found in the intestines, but certain strains can cause food poisoning when consumed in contaminated food or water.";
            button1Div.appendChild(button1on);
        } else {
            button1Div.removeChild(button1on);
            button1on = null;
        }
    };
    
    button2.onclick = function () {
        var button2Div = document.querySelector(".Norovirus");

        if (button2on === null) {
            button2on = document.createElement("p");
            button2on.textContent = "Norovirus is a highly contagious virus that can cause outbreaks of gastrointestinal illness, often associated with vomiting and diarrhea.";
            button2Div.appendChild(button2on);
        } else {
            button2Div.removeChild(button2on);
            button2on = null;
        }
    }; 
    
    button3.onclick = function () {
        var button3Div = document.querySelector(".Salmonella");

        if (button3on === null) {
            button3on = document.createElement("p");
            button3on.textContent = "Salmonella is a group of bacteria that can cause foodborne illnesses, with symptoms including nausea, diarrhea, and fever.";
            button3Div.appendChild(button3on);
        } else {
            button3Div.removeChild(button3on);
            button3on = null;
        }
    };

    button4.onclick = function () {
        var button4Div = document.querySelector(".Lactobacillus");

        if (button4on === null) {
            button4on = document.createElement("p");
            button4on.textContent = "Lactobacillus is a beneficial bacterium commonly found in yogurt, known for promoting digestive health.";
            button4Div.appendChild(button4on);
        } else {
            button4Div.removeChild(button4on);
            button4on = null;
        }
    };        
    
    button5.onclick = function () {
        var button5Div = document.querySelector(".Bifidobacteria");

        if (button5on === null) {
            button5on = document.createElement("p");
            button5on.textContent = "Bifidobacteria are another group of beneficial bacteria that reside in the intestines and play a key role in maintaining gut balance.";
            button5Div.appendChild(button5on);
        } else {
            button5Div.removeChild(button5on);
            button5on = null;
        }
    }; 
    
    button6.onclick = function () {
        var button6Div = document.querySelector(".Saccharomycesboulardii");

        if (button6on === null) {
            button6on = document.createElement("p");
            button6on.textContent = "Saccharomyces boulardii is a probiotic yeast used to help alleviate diarrhea and other digestive issues.";
            button6Div.appendChild(button6on);
        } else {
            button6Div.removeChild(button6on);
            button6on = null;
        }
    }; 
};
