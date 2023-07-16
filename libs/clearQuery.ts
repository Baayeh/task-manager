import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { ReadonlyURLSearchParams } from 'next/navigation';
import qs from 'query-string';

const clearQuery = (
  router: AppRouterInstance,
  params: ReadonlyURLSearchParams,
  pathname: string
) => {
  let currentQuery = params && qs.parse(params.toString());
  if (params && params?.get('projectId')) {
    delete currentQuery.projectId;
  }

  const url = qs.stringifyUrl(
    {
      url: pathname,
      query: currentQuery,
    },
    { skipNull: true }
  );

  router.push(url);
};

export default clearQuery;
