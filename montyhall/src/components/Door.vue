<template>
    <div class="door-area">
        <!-- :class="{ selected: selected }" 
        é o mesmo que :class="{ selected }" -->
        <div class="door-frame" :class="{ selected: selected && !open }">
            <Gift v-if="open && hasGift" />
        </div>
        <div class="door" @click="selected = !selected" :class="{ open }">
            <div class="number" :class="{ selected }">{{ number }}</div>
            <div class="knob" :class="{ selected }" @click.stop="open = selected"></div>
        </div>
    </div>
</template>

<script>
import Gift from './Gift.vue'

export default {
    components: { Gift },
    props: {
        number: {},
        hasGift: { type: Boolean }
    },
    data() {
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>
:root {
    --door-border: 5px solid brown;
    --selected-border: 5px solid yellow;
}

.door-area {
    position: relative;
    width: 200px;
    height: 310px;
    border-bottom: 10px solid #aaa;
    margin-bottom: 20px;
    font-size: 3rem;
    display: flex;
    justify-content: center;
}

.door-frame {
    position: absolute;
    width: 180px;
    height: 300px;
    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: chocolate;
    display: flex;
    flex-direction: column;
    padding: 20px;    
    align-items: center;
}

.door .knob {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: brown;
    align-self: flex-start;
    margin-top: 60px;
}

.door-frame.selected {
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
}

.door > .number.selected {
    color: yellow;
}

.door > .knob.selected {
    background-color: yellow;
}

.door.open {
    background-color: #0007;
}

.door.open .knob {
    display: none;
}

.door.open .number {
    display: none;
}
</style>