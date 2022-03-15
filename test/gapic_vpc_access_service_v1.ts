// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as vpcaccessserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf, LROperation, operationsProtos} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubLongRunningCall<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().rejects(callError)
    : sinon.stub().resolves([mockOperation]);
}

function stubLongRunningCallWithCallback<ResponseType>(
  response?: ResponseType,
  callError?: Error,
  lroError?: Error
) {
  const innerStub = lroError
    ? sinon.stub().rejects(lroError)
    : sinon.stub().resolves([response]);
  const mockOperation = {
    promise: innerStub,
  };
  return callError
    ? sinon.stub().callsArgWith(2, callError)
    : sinon.stub().callsArgWith(2, null, mockOperation);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.VpcAccessServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      vpcaccessserviceModule.v1.VpcAccessServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      vpcaccessserviceModule.v1.VpcAccessServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = vpcaccessserviceModule.v1.VpcAccessServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.vpcAccessServiceStub, undefined);
    await client.initialize();
    assert(client.vpcAccessServiceStub);
  });

  it('has close method for the initialized client', done => {
    const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.initialize();
    assert(client.vpcAccessServiceStub);
    client.close().then(() => {
      done();
    });
  });

  it('has close method for the non-initialized client', done => {
    const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.vpcAccessServiceStub, undefined);
    client.close().then(() => {
      done();
    });
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('getConnector', () => {
    it('invokes getConnector without error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.GetConnectorRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.Connector()
      );
      client.innerApiCalls.getConnector = stubSimpleCall(expectedResponse);
      const [response] = await client.getConnector(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getConnector without error using callback', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.GetConnectorRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.Connector()
      );
      client.innerApiCalls.getConnector =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getConnector(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.vpcaccess.v1.IConnector | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getConnector with error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.GetConnectorRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getConnector = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getConnector(request), expectedError);
      assert(
        (client.innerApiCalls.getConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getConnector with closed client', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.GetConnectorRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getConnector(request), expectedError);
    });
  });

  describe('createConnector', () => {
    it('invokes createConnector without error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.CreateConnectorRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.createConnector =
        stubLongRunningCall(expectedResponse);
      const [operation] = await client.createConnector(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createConnector without error using callback', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.CreateConnectorRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.createConnector =
        stubLongRunningCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createConnector(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.cloud.vpcaccess.v1.IConnector,
              protos.google.cloud.vpcaccess.v1.IOperationMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.cloud.vpcaccess.v1.IConnector,
        protos.google.cloud.vpcaccess.v1.IOperationMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createConnector with call error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.CreateConnectorRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createConnector = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createConnector(request), expectedError);
      assert(
        (client.innerApiCalls.createConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createConnector with LRO error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.CreateConnectorRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createConnector = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.createConnector(request);
      await assert.rejects(operation.promise(), expectedError);
      assert(
        (client.innerApiCalls.createConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes checkCreateConnectorProgress without error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkCreateConnectorProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkCreateConnectorProgress with error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkCreateConnectorProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });

  describe('deleteConnector', () => {
    it('invokes deleteConnector without error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.DeleteConnectorRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.deleteConnector =
        stubLongRunningCall(expectedResponse);
      const [operation] = await client.deleteConnector(request);
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteConnector without error using callback', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.DeleteConnectorRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.longrunning.Operation()
      );
      client.innerApiCalls.deleteConnector =
        stubLongRunningCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.deleteConnector(
          request,
          (
            err?: Error | null,
            result?: LROperation<
              protos.google.protobuf.IEmpty,
              protos.google.cloud.vpcaccess.v1.IOperationMetadata
            > | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const operation = (await promise) as LROperation<
        protos.google.protobuf.IEmpty,
        protos.google.cloud.vpcaccess.v1.IOperationMetadata
      >;
      const [response] = await operation.promise();
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes deleteConnector with call error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.DeleteConnectorRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteConnector = stubLongRunningCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.deleteConnector(request), expectedError);
      assert(
        (client.innerApiCalls.deleteConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteConnector with LRO error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.DeleteConnectorRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteConnector = stubLongRunningCall(
        undefined,
        undefined,
        expectedError
      );
      const [operation] = await client.deleteConnector(request);
      await assert.rejects(operation.promise(), expectedError);
      assert(
        (client.innerApiCalls.deleteConnector as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes checkDeleteConnectorProgress without error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedResponse = generateSampleMessage(
        new operationsProtos.google.longrunning.Operation()
      );
      expectedResponse.name = 'test';
      expectedResponse.response = {type_url: 'url', value: Buffer.from('')};
      expectedResponse.metadata = {type_url: 'url', value: Buffer.from('')};

      client.operationsClient.getOperation = stubSimpleCall(expectedResponse);
      const decodedOperation = await client.checkDeleteConnectorProgress(
        expectedResponse.name
      );
      assert.deepStrictEqual(decodedOperation.name, expectedResponse.name);
      assert(decodedOperation.metadata);
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });

    it('invokes checkDeleteConnectorProgress with error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const expectedError = new Error('expected');

      client.operationsClient.getOperation = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.checkDeleteConnectorProgress(''),
        expectedError
      );
      assert((client.operationsClient.getOperation as SinonStub).getCall(0));
    });
  });

  describe('listConnectors', () => {
    it('invokes listConnectors without error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.ListConnectorsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
      ];
      client.innerApiCalls.listConnectors = stubSimpleCall(expectedResponse);
      const [response] = await client.listConnectors(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listConnectors as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listConnectors without error using callback', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.ListConnectorsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
      ];
      client.innerApiCalls.listConnectors =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listConnectors(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.vpcaccess.v1.IConnector[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listConnectors as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listConnectors with error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.ListConnectorsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listConnectors = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listConnectors(request), expectedError);
      assert(
        (client.innerApiCalls.listConnectors as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listConnectorsStream without error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.ListConnectorsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
      ];
      client.descriptors.page.listConnectors.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listConnectorsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.vpcaccess.v1.Connector[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.vpcaccess.v1.Connector) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listConnectors.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listConnectors, request)
      );
      assert.strictEqual(
        (
          client.descriptors.page.listConnectors.createStream as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listConnectorsStream with error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.ListConnectorsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listConnectors.createStream =
        stubPageStreamingCall(undefined, expectedError);
      const stream = client.listConnectorsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.vpcaccess.v1.Connector[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.vpcaccess.v1.Connector) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listConnectors.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listConnectors, request)
      );
      assert.strictEqual(
        (
          client.descriptors.page.listConnectors.createStream as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listConnectors without error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.ListConnectorsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
        generateSampleMessage(new protos.google.cloud.vpcaccess.v1.Connector()),
      ];
      client.descriptors.page.listConnectors.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.vpcaccess.v1.IConnector[] = [];
      const iterable = client.listConnectorsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (
          client.descriptors.page.listConnectors.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.listConnectors.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listConnectors with error', async () => {
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.vpcaccess.v1.ListConnectorsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listConnectors.asyncIterate =
        stubAsyncIterationCall(undefined, expectedError);
      const iterable = client.listConnectorsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.vpcaccess.v1.IConnector[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (
          client.descriptors.page.listConnectors.asyncIterate as SinonStub
        ).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (
          client.descriptors.page.listConnectors.asyncIterate as SinonStub
        ).getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('connector', () => {
      const fakePath = '/rendered/path/connector';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        connector: 'connectorValue',
      };
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.connectorPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.connectorPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('connectorPath', () => {
        const result = client.connectorPath(
          'projectValue',
          'locationValue',
          'connectorValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.connectorPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromConnectorName', () => {
        const result = client.matchProjectFromConnectorName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.connectorPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromConnectorName', () => {
        const result = client.matchLocationFromConnectorName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.connectorPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchConnectorFromConnectorName', () => {
        const result = client.matchConnectorFromConnectorName(fakePath);
        assert.strictEqual(result, 'connectorValue');
        assert(
          (client.pathTemplates.connectorPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('location', () => {
      const fakePath = '/rendered/path/location';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
      };
      const client = new vpcaccessserviceModule.v1.VpcAccessServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.locationPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.locationPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('locationPath', () => {
        const result = client.locationPath('projectValue', 'locationValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.locationPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromLocationName', () => {
        const result = client.matchProjectFromLocationName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromLocationName', () => {
        const result = client.matchLocationFromLocationName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.locationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
