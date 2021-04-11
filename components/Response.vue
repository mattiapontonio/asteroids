<template>
    <table>
        <caption>Response</caption>
        <tr>
            <th>status</th>
            <th>statusText</th>
        </tr>
        <tr>
            <td>{{status}}</td>
            <td>{{statusText}}</td>
        </tr>
    </table>
</template>
<script>
    export default {
        name: 'response'
    }
</script>
