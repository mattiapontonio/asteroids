<template>
    <div class='error'>  
        <p>{{message}}</p>
        <p>{{name}}</p>
        <p>{{description}}</p>
        <p>{{number}}</p>
        <p>{{fileName}}</p>
        <p>{{lineNumber}}</p>
        <p>{{columnNumber}}</p>
        <p>{{stack}}</p>
    </div>
</template>
<script>
    export default {
        name: 'error',
        props: [
            'message',
            'name',
            'description',
            'number',
            'fileName',
            'lineNumber',
            'columnNumber',
            'stack'
        ]
    }

</script>