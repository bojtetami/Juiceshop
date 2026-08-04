/*
 * Copyright (c) 2014-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as winston from 'winston'

export default winston.createLogger({
  transports: [
    new winston.transports.Console({ level: process.env.NODE_ENV === 'test' ? 'error' : 'info' })
  ],
  format: winston.format.simple()
})
  makeRequestToDownstream(filteredReq)
      .then((resp) => {
        if (resp.statusCode) {
          this.res.status(resp.statusCode).set(resp.headers).send(resp.body);
        } else {
          this.res.status(500).send(resp.statusText);
        }
      })
      .catch((err) => {
        logger.error(
          this.logContext,
          err,
          'Failed to forward webhook event to Snyk Platform.',
        );
      });
  }
