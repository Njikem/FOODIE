<template>
    <div>
        <client-profile-edit></client-profile-edit>
        <client-profile-info></client-profile-info>
        <delete-profile></delete-profile>

    </div>
</template>

<script>
import ClientProfileEdit from '@/components/ClientProfileEdit.vue'
import ClientProfileInfo from '@/components/ClientProfileInfo.vue'
import DeleteProfile from '@/components/DeleteProfile.vue'
    export default {
        components: {
            ClientProfileEdit,
            ClientProfileInfo,
            DeleteProfile,
        }
    };
</script>

<style lang="scss" scoped>

</style>