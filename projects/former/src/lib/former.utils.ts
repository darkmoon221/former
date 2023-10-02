/*
 * Apache-2.0 Licence
 * Copyright (c) 2023 Tobias Kronschnabl
 *
 * Please see LICENCE for complete licence text.
 */
import {KeyValue} from '@angular/common';

export default class FormerUtils {

  static asKeyValueArray<V>(obj: { [key: string]: V }): KeyValue<string, V>[] {
    return Array.from(FormerUtils.keyValueGenerator(obj));
  }

  static* keyValueGenerator<V>(obj: { [key: string]: V }): Iterable<KeyValue<string, V>> {
    for (const key of Object.keys(obj)) {
      const value = obj[key];
      yield {key, value};
    }
  }
}
