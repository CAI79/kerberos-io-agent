import API from './api';

export function doGetConfig(onSuccess, onError) {
  const endpoint = API.get(`config`);
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doSaveConfig(config, onSuccess, onError) {
  const endpoint = API.post(`config`, {
    ...config,
  });
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doGetKerberosAgentTags(onSuccess, onError) {
  const endpoint = API.get(`kerberos-agent/tags`);
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doVerifyPersistence(config, onSuccess, onError) {
  const endpoint = API.post(`persistence/verify`, {
    ...config,
  });
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doVerifyHub(config, onSuccess, onError) {
  const endpoint = API.post(`hub/verify`, {
    ...config,
  });
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doVerifyCamera(streamType, config, onSuccess, onError) {
  const endpoint = API.post(`camera/verify/${streamType}`, {
    ...config,
  });
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doGetDashboardInformation(onSuccess, onError) {
  const endpoint = API.get(`dashboard`);
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}

export function doGetEvents(eventfilter, onSuccess, onError) {
  const endpoint = API.post(`latest-events`, eventfilter);
  endpoint
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
}
