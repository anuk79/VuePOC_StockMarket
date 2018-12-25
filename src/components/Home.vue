<template>
    <div>
        <h2>Trade or View your Portfolio</h2>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your Available Funds: ${{ availableFunds }}</p>
    </div>
</template>

<script>
export default {
    props: ['availableFunds']
};
</script>