<template>
    <table>
        <caption>Response</caption>
        <tr>
            <th>status</th>
            <th>statusText</th>
        </tr>
        <tr>
            <td>{{response.status}}</td>
            <td>{{response.statusText}}</td>
        </tr>
        </table>
</template>
<script>
    export default {
        name: 'response',
        props: {
            response: {
                type: Response,
            }
        }     
    }
</script>
