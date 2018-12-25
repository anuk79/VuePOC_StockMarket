<template>
    <div class="loading-spinner"></div>
</template>

<script>
export default {}
</script>

<style scoped>
.loading-spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid gray;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    animation: spin 1s linear infinite;
    display: inline-block;
    margin-left: 45%;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>