/* eslint-disable import/prefer-default-export */

import * as React from 'react';
import { FormInput } from './SubmissionForm';

  
  export const EmailTemplate: React.FC<Readonly<FormInput>> = ({
    ...FormData
  }) => (
    <div>
      <h1>You have a new message from {FormData.firstName} {FormData.lastName}!</h1>
      <div>{FormData.message}</div>
      <div>You can contact {FormData.firstName} {FormData.lastName} at {FormData.email}</div>
    </div>
  );