# Portfolio

The is portfolio of all my work experience, education, and projects.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
pnpm dev
```

## Configurations

`Environmental Variables` parameters can be seen in [.env.sample](.env.sample).

## Connecting to EC2 Instance

`.pem file is required`

```
ssh -i ./path/to/file.pem ec2-user@34.225.39.159
```

## Run PM2 on EC2 Instance

start production server

```
pm2 start npm --name "portfolio" -- start --watch
```

stop and delete server

```
pm2 delete [app name]
```


## Edit Nginx Configs

```
sudo vi your-site.conf
```

References:

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html

https://kit.svelte.dev/

https://pm2.keymetrics.io/

https://www.nginx.com/