const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL
const upstashRedisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN

type Command = 'zrange' | 'sismember' | 'get' | 'smembers'

export async function fetchRedis(command: Command, ...args: (string | number)[]) {
  const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join('/')}`
}
