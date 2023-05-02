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
    <svg v-if="name === 'delete'" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 7.5H6.25H26.25" stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5H23.75Z"
            stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.5 13.75V21.25" stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.5 13.75V21.25" stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name === 'edit'" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 25H26.25" stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M20.625 4.37501C21.1223 3.87773 21.7967 3.59836 22.5 3.59836C22.8482 3.59836 23.193 3.66695 23.5147 3.8002C23.8365 3.93346 24.1288 4.12878 24.375 4.37501C24.6212 4.62124 24.8165 4.91355 24.9498 5.23527C25.0831 5.55698 25.1516 5.90179 25.1516 6.25001C25.1516 6.59823 25.0831 6.94304 24.9498 7.26475C24.8165 7.58646 24.6212 7.87878 24.375 8.12501L8.75 23.75L3.75 25L5 20L20.625 4.37501Z"
            stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="name === 'download'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="30" height="30">
        <path
            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
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