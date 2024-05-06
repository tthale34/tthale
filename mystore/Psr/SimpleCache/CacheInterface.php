<?php
namespace Psr\SimpleCache;
// $cache;
interface CacheInterface
{
    // constache = [];

    public function clear();

    public function delete($key);

    public function deleteMultiple($keys);

    public function get($key, $default = null);

    public function getMultiple($keys, $default = null);

    public function has($key);

    public function set($key, $value, $ttl = null);

    public function setMultiple($values, $ttl = null);

}
