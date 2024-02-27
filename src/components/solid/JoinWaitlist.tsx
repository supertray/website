import { TextField } from '@kobalte/core';
import { type SubmitHandler, createForm, email, required } from '@modular-forms/solid';
import { createSignal, onMount, splitProps } from 'solid-js';
import { Toaster, toast } from 'solid-sonner';

import { supabase } from '../../api/supabase';
import type { ui } from '../../i18n/ui';

type WaitlistForm = {
  first_name: string;
  last_name: string;
  company?: string;
  email: string;
  use_case?: string;
  captcha_math?: string;
};

function TextInput(props: { label: string; name: string; error?: string } & TextField.TextFieldInputProps) {
  const [p, rest] = splitProps(props, ['label', 'name', 'error', 'value']);

  return (
    <TextField.Root
      value={p.value?.toString()}
      classList={{
        [rest.class!]: !!rest.class,
      }}
      validationState={p.error ? 'invalid' : 'valid'}
    >
      <TextField.Input
        {...rest}
        placeholder={p.label ? `${p.label}${rest.required ? '*' : ''}` : undefined}
        class="w-full px-3 py-1.5 ring-2 ring-sand-12/10 bg-transparent rounded-lg focus:ring-orange-9 focus:outline-none text-base leading-6 placeholder:text-sand-8 shadow-sm"
        name={p.name}
        classList={{
          'invalid:ring-red-10': !!p.error,
          ...rest.classList,
        }}
      />
      <TextField.ErrorMessage class="text-sm text-red-10 p-1">{p.error}</TextField.ErrorMessage>
    </TextField.Root>
  );
}

function TextArea(props: { label: string; name: string; error?: string } & TextField.TextFieldTextAreaProps) {
  const [p, rest] = splitProps(props, ['label', 'name', 'error', 'value']);

  return (
    <TextField.Root
      value={p.value?.toString()}
      classList={{
        [rest.class!]: !!rest.class,
      }}
      validationState={p.error ? 'invalid' : 'valid'}
    >
      <TextField.TextArea
        {...rest}
        placeholder={`${p.label}${rest.required ? '*' : ''}`}
        class="resize-none w-full px-3 py-1.5 ring-2 ring-sand-12/10 bg-transparent rounded-lg focus:ring-orange-9 focus:outline-none text-base leading-6 placeholder:text-sand-8 shadow-sm"
        name={p.name}
        classList={{
          'invalid:ring-red-10': !!p.error,
          ...rest.classList,
        }}
      />
      <TextField.ErrorMessage class="text-sm text-red-10 p-1">{p.error}</TextField.ErrorMessage>
    </TextField.Root>
  );
}

export function WaitlistForm(props: { className?: string; translations: (typeof ui)['en'] | (typeof ui)['de'] }) {
  const [, { Form, Field }] = createForm<WaitlistForm>({
    initialValues: {
      first_name: undefined,
      last_name: undefined,
      company: undefined,
      email: undefined,
      use_case: undefined,
      captcha_math: undefined,
    },
  });

  const handleSubmit: SubmitHandler<WaitlistForm> = async (values) => {
    const run = new Promise((res, rej) => {
      setTimeout(() => {
        supabase
          .from('early_access')
          .insert({
            first_name: values.first_name,
            last_name: values.last_name,
            company: values.company || null,
            email: values.email,
            use_case: values.use_case || null,
          })
          .then(({ error }) => {
            if (error?.code === '23505') {
              rej(props.translations['waitlistForm.alreadyOnWaitlist']);
            }
            if (!error) {
              res(true);
            }
          });
      }, 1000);
    });
    toast.promise(run, {
      loading: props.translations['loading'],
      success: () => {
        return props.translations['waitlistForm.success'];
      },
      error: (error) => {
        return error;
      },
    });
  };

  const [result, setResult] = createSignal(-1);
  const [math, setMath] = createSignal('');

  onMount(() => {
    const math1 = Math.ceil(Math.random() * 10) + Math.floor(Math.random() * 10);
    const math2 = Math.ceil(Math.random() * 10) + Math.floor(Math.random() * 10);
    const math = `${math1} + ${math2} =`;
    const result = math1 + math2;
    setResult(result);
    setMath(math);
  });

  return (
    <Form
      class="grid md:grid-cols-12 py-10 gap-5"
      classList={{ [props.className!]: !!props.className }}
      onSubmit={handleSubmit}
    >
      <Field name="first_name" validate={[required(props.translations['form.validation.required'])]}>
        {(field, fprops) => (
          <TextInput
            {...fprops}
            name={field.name}
            label={props.translations['waitlistForm.firstName']}
            required
            autocomplete="given-name"
            class="col-span-12 sm:col-span-6"
            error={field.error}
          />
        )}
      </Field>
      <Field name="last_name" validate={[required(props.translations['form.validation.required'])]}>
        {(field, fprops) => (
          <TextInput
            {...fprops}
            name={field.name}
            label={props.translations['waitlistForm.lastName']}
            required
            autocomplete="family-name"
            class="col-span-12 sm:col-span-6"
            error={field.error}
          />
        )}
      </Field>
      <Field name="company" validate={[]}>
        {(field, fprops) => (
          <TextInput
            {...fprops}
            name={field.name}
            label={props.translations['waitlistForm.company']}
            class="col-span-12"
            autocomplete="organization"
            error={field.error}
          />
        )}
      </Field>
      <Field
        name="email"
        validate={[
          required(props.translations['form.validation.required']),
          email(props.translations['form.validation.email']),
        ]}
      >
        {(field, fprops) => (
          <TextInput
            {...fprops}
            name={field.name}
            label={props.translations['waitlistForm.email']}
            type="email"
            required
            class="col-span-12"
            error={field.error}
          />
        )}
      </Field>
      <Field name="use_case">
        {(field, fprops) => (
          <TextArea
            {...fprops}
            name={field.name}
            label={props.translations['waitlistForm.useCase']}
            class="col-span-12"
            rows={7}
            maxLength={600}
            error={field.error}
          />
        )}
      </Field>
      <div
        class="sm:col-span-2 flex items-center -mb-3 sm:mb-0 transition"
        classList={{
          'opacity-0': math().length === 0,
        }}
      >
        {math()}
      </div>
      <Field
        name="captcha_math"
        validate={[
          required(props.translations['form.validation.required']),
          (v) => {
            if (v !== result().toString()) {
              return props.translations['form.validation.invalidResult'];
            }
            return '';
          },
        ]}
      >
        {(field, fprops) => (
          <TextInput
            {...fprops}
            name={field.name}
            label={props.translations['waitlistForm.enterResult']}
            class="col-span-12 sm:col-span-10"
            classList={{
              'transition': true,
              'opacity-0': math().length === 0,
            }}
            error={field.error}
          />
        )}
      </Field>
      <div
        class="flex justify-center col-span-12 transition"
        classList={{
          'opacity-0': math().length === 0,
        }}
      >
        <button
          type="submit"
          class="bg-sand-3 px-3 py-1.5 text-base leading-6 rounded-lg hover:bg-sand-4 active:bg-sand-5 ring-1 ring-sand-12/10 shadow-sm transition"
        >
          {props.translations['joinTheWaitlist']}
        </button>
      </div>
      <Toaster richColors position="bottom-center" />
    </Form>
  );
}
