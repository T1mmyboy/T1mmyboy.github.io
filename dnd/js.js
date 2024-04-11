const profBonus = [2,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9];

function submitSheet() {
    replaceInputsWithValues('char-name');
    replaceInputsWithValues('char-race');
    replaceInputsWithValues('char-class');
    replaceInputsWithValues('char-level');
    replaceInputsWithValues('str');
    replaceInputsWithValues('dex');
    replaceInputsWithValues('con');
    replaceInputsWithValues('int');
    replaceInputsWithValues('wis');
    replaceInputsWithValues('cha');
    replaceInputsWithValues('spi');
    replaceInputsWithValues('man');
    // Add more fields as needed

    replaceProficiencyWithStat('acr', 'dex');
    replaceProficiencyWithStat('ani', 'wis');
    replaceProficiencyWithStat('arc', 'int');
    replaceProficiencyWithStat('ath', 'str');
    replaceProficiencyWithStat('dec', 'cha');
    replaceProficiencyWithStat('his', 'int');
    replaceProficiencyWithStat('ins', 'wis');
    replaceProficiencyWithStat('itm', 'cha');
    replaceProficiencyWithStat('inv', 'int');
    replaceProficiencyWithStat('med', 'wis');
    replaceProficiencyWithStat('nat', 'int');
    replaceProficiencyWithStat('per', 'wis');
    replaceProficiencyWithStat('prf', 'cha');
    replaceProficiencyWithStat('prs', 'cha');
    replaceProficiencyWithStat('rel', 'int');
    replaceProficiencyWithStat('slt', 'dex');
    replaceProficiencyWithStat('ste', 'dex');
    replaceProficiencyWithStat('sur', 'wis');
    replaceProficiencyWithStat('rid', 'dex');
    // Add more proficiencies as needed
    calculateHP();
    calculateAC();
}

function replaceInputsWithValues(inputId) {
    const input = document.getElementById(inputId);
    const value = input.value;
    const span = document.getElementById(`${inputId}-value`);
    if (parseInt(value) >= 0 && inputId !== 'char-level') {
        span.textContent = "+" + value;
    } else {
        span.textContent = value;
    }
    input.style.display = 'none'; // hide the input field
}


        function replaceProficiencyWithStat(proficiencyId, statId) {
            const checkbox = document.getElementById(proficiencyId);
            const span = document.getElementById(`${proficiencyId}-value`);
            const statValue = document.getElementById(statId).value;
            if (checkbox.checked) {
                const bonus = profBonus[parseInt(document.getElementById('char-level').value) - 1];
                const total = parseInt(statValue) + bonus;
                if (total >= 0) {
                    span.textContent = "+" + total;
                } else {
                    span.textContent = total;
                }
            } else {
                if (parseInt(statValue) >= 0) {
                    span.textContent = "+" + statValue;
                } else {
                    span.textContent = statValue;
                }
            }
            checkbox.style.display = 'none'; // hide the checkbox
        }
        function calculateHP() {
            const hitDie = parseInt(document.getElementById('char-hitdie').value);
            const level = parseInt(document.getElementById('char-level').value);
            const con = parseInt(document.getElementById('con').value);
            const hp = (hitDie * level) + (con * level);
            document.getElementById('char-hp-value').textContent = hp;
        }
        
        function calculateAC() {
            const dex = parseInt(document.getElementById('dex').value);
            const extraAC = parseInt(document.getElementById('extra-ac').value);
            const ac = 10 + dex + extraAC;
            document.getElementById('char-ac-value').textContent = ac;
        }