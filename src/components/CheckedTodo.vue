<template>
    <label class="checked">
        <input type="checkbox" @click="$emit('checkedOrder')">
        <span class="checked__checkmark"></span>
    </label>
</template>

<script>
export default {
    name: "CheckedTodo"
}
</script>

<style lang="scss" scoped>
.checked {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.checked input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checked__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #e9cccc;
}

/* On mouse-over, add a grey background color */
.checked:hover input~.checked__checkmark {
    background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.checked input:checked~.checked__checkmark {
    background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checked__checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checked input:checked~.checked__checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.checked .checked__checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>