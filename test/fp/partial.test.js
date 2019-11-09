import partial from '../../src/fp/partial';

// 模拟一个ajax请求
const request = (url, options, params) => {
  return new Promise((resolve, reject) => 
    setTimeout(() => {
      if (url && options && params) {
        resolve([1, 2, 3])
      } else {
        reject(new Error('parameter list needs url、 options、 params.'))
      }
    }, 2000)
  )
}

test('partial', () => {
  const fetchSomething = partial(request, '/api/fetchSomething', {'Content-Type': 'application/json'});
  // later
  fetchSomething({ index: 2, name: 'wander' }).then((datas => expect(datas).toBe([1, 2, 3])));
});