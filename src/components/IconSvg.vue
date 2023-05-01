<template>
    <svg v-if="name === 'lock'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
            stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
            stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
            stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name === 'mail'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
            stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 7L12 13L21 7" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name === 'user'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
            stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script>
export default {
    name: "IconSvg",
    props: {
        name: {
            type: String,
            default: () => ''
        }
    }
}
</script>

<style lang="scss" scoped></style>