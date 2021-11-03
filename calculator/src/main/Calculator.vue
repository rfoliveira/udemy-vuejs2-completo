<template>
    <div class="calculator">
        <Display :value="displayValue" />
        <Button label="AC" triple @click="clearMemory" />
        <Button label="/" operation @click="setOperation" />
        <Button label="7" @click="addDigit" />
        <Button label="8" @click="addDigit" />
        <Button label="9" @click="addDigit" />
        <Button label="*" operation @click="setOperation" />
        <Button label="4" @click="addDigit" />
        <Button label="5" @click="addDigit" />
        <Button label="6" @click="addDigit" />
        <Button label="-" operation @click="setOperation" />
        <Button label="1" @click="addDigit" />
        <Button label="2" @click="addDigit" />
        <Button label="3" @click="addDigit" />
        <Button label="+" operation @click="setOperation" />
        <Button label="0" double @click="addDigit" />
        <Button label="." />
        <Button label="=" operation @click="addDigit" />
    </div>
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'

export default {
    components: { Display, Button },
    data: function() {
        return {
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0,0],
            current: 0
        }
    },
    methods: {
        clearMemory() {

        },
        setOperation() {

        },
        addDigit() {
            
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>