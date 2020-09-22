/* eslint-disable class-methods-use-this */
import { KafkaClient as Client, Producer, ProduceRequest } from 'kafka-node';

import environment from '../config/environment';

class EventService {
  public publish<T>(topic: string, message: T): void {
    // The client connects to a Kafka broker
    const client = new Client({
      kafkaHost: environment.eventBus.host,
    });
    // The producer handles publishing messages over a topic
    const producer = new Producer(client);
    // First wait for the producer to be initialized
    producer.on('ready',
      (): void => {
        // Update metadata for the topic we'd like to publish to
        client.refreshMetadata(
          [topic],
          (err: Error): void => {
            if (err) {
              throw err;
            }

            console.log(`Sending message to ${topic}: ${message}`);

            producer.send(
              [{ topic, messages: [message] }],
              (error: Error, result: ProduceRequest): void => {
                console.log(error || result);
              },
            );
          },
        );
      });

    // Handle errors
    producer.on(
      'error',
      (err: Error): void => {
        console.log('error', err);
      },
    );
  }
}

const eventService = new EventService();

export default eventService;
