import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from './routes/upload-video';

const app = fastify()

app.register(fastifyCors, {
    origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running')
})