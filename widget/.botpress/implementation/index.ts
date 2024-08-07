/* tslint:disable */
// This file is generated
// Do not edit this file
/* tslint:disable */
// This file is generated
// Do not edit this file

import * as sdk from "@botpress/sdk"

import type * as configuration from "./configuration/index"
import type * as actions from "./actions/index"
import type * as channels from "./channels/index"
import type * as events from "./events/index"
import type * as states from "./states/index"
import type * as entities from "./entities/index"
export * as configuration from "./configuration/index"
export * as actions from "./actions/index"
export * as channels from "./channels/index"
export * as events from "./events/index"
export * as states from "./states/index"
export * as entities from "./entities/index"

// type utils
type Cast<X, Y> = X extends Y ? X : Y
type ValueOf<T> = T[keyof T]
type AsyncFunction = (...args: any[]) => Promise<any>
type SimplifyObject<T extends object> = T extends infer O ? { [K in keyof O]: Simplify<O[K]> } : never
type Simplify<T> = T extends (...args: infer A) => infer R
  ? (...args: Simplify<A>) => Simplify<R>
  : T extends Buffer
  ? Buffer
  : T extends Promise<infer R>
  ? Promise<Simplify<R>>
  : T extends object
  ? SimplifyObject<T>
  : T

type TIntegration = {
  name: "widget"
  version: "0.0.1"
  configuration: configuration.Configuration
  actions: actions.Actions
  channels: channels.Channels
  events: events.Events
  states: states.States
  user: { "tags": {}, "creation": { "enabled": false, "requiredTags": [] } }
  entities: entities.Entities
}

export type IntegrationProps = sdk.IntegrationProps<TIntegration>

export class Integration extends sdk.Integration<TIntegration> {}

export type Client = sdk.IntegrationSpecificClient<TIntegration>

// extra types

export type HandlerProps = Simplify<Parameters<IntegrationProps['handler']>[0]>

export type ActionProps = Simplify<{
  [K in keyof IntegrationProps['actions']]: Parameters<IntegrationProps['actions'][K]>[0]
}>
export type AnyActionProps = ValueOf<ActionProps>

export type MessageProps = Simplify<{
  [TChannel in keyof IntegrationProps['channels']]: {
    [TMessage in keyof IntegrationProps['channels'][TChannel]['messages']]: Parameters<
      IntegrationProps['channels'][TChannel]['messages'][TMessage]
    >[0]
  }
}>
export type AnyMessageProps = ValueOf<ValueOf<MessageProps>>

export type Context = HandlerProps['ctx']
export type Logger = HandlerProps['logger']

export type AckFunctions = {
  [TChannel in keyof MessageProps]: {
    [TMessage in keyof MessageProps[TChannel]]: Cast<MessageProps[TChannel][TMessage], AnyMessageProps>['ack']
  }
}
export type AnyAckFunction = ValueOf<ValueOf<AckFunctions>>

export type ClientOperation = Simplify<ValueOf<{
  [K in keyof Client as Client[K] extends AsyncFunction ? K : never]: K
}>>
export type ClientRequests = Simplify<{
  [K in ClientOperation]: Parameters<Client[K]>[0]
}>
export type ClientResponses = Simplify<{
  [K in ClientOperation]: Awaited<ReturnType<Client[K]>>
}>