FROM node:22-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune admin --docker


FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN yarn install
COPY --from=builder /app/out/full/ .

# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

RUN yarn turbo build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 next
RUN adduser --system --uid 1001 next
USER next

COPY --from=installer --chown=next:nodejs /app/apps/admin/.next/standalone ./
COPY --from=installer --chown=next:nodejs /app/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=installer --chown=next:nodejs /app/apps/admin/public ./apps/admin/public

CMD node apps/admin/server.js


