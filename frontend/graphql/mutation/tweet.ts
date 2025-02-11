import { graphql } from "@/gql";

export const createTweetMutation = graphql(`
    mutation CreateTweet($payload: CreateTweetData!) {
        createTweet(payload: $payload) {
            id
        }
    }    
`)